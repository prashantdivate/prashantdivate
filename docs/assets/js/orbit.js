const mount = document.querySelector("[data-orbit]");

if (mount) {
  import("https://unpkg.com/three@0.161.0/build/three.module.js")
    .then((THREE) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 6);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.45, 2),
        new THREE.MeshStandardMaterial({
          color: 0x43e7ff,
          metalness: 0.35,
          roughness: 0.32,
          wireframe: true
        })
      );
      scene.add(core);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.1, 0.018, 12, 160),
        new THREE.MeshBasicMaterial({ color: 0x2ee6a6 })
      );
      ring.rotation.x = Math.PI * 0.62;
      scene.add(ring);

      const secondRing = ring.clone();
      secondRing.material = new THREE.MeshBasicMaterial({ color: 0xff4fd8 });
      secondRing.rotation.x = Math.PI * 0.14;
      secondRing.rotation.y = Math.PI * 0.18;
      scene.add(secondRing);

      const pointsGeometry = new THREE.BufferGeometry();
      const points = [];
      for (let i = 0; i < 620; i += 1) {
        points.push((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6);
      }
      pointsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      const field = new THREE.Points(
        pointsGeometry,
        new THREE.PointsMaterial({ color: 0xf6c85f, size: 0.018, transparent: true, opacity: 0.78 })
      );
      scene.add(field);

      scene.add(new THREE.AmbientLight(0x8aa4ff, 1.2));
      const light = new THREE.PointLight(0x43e7ff, 14, 12);
      light.position.set(3, 2, 4);
      scene.add(light);

      const resize = () => {
        const width = mount.clientWidth || 600;
        const height = mount.clientHeight || 600;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      resize();
      window.addEventListener("resize", resize);

      const animate = () => {
        core.rotation.x += 0.003;
        core.rotation.y += 0.006;
        ring.rotation.z += 0.004;
        secondRing.rotation.z -= 0.003;
        field.rotation.y += 0.0008;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    })
    .catch(() => {
      mount.classList.add("is-static");
    });
}
