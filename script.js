     const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMobileMenu = document.getElementById('close-mobile-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                document.body.style.overflow = '';
            });
        });
        
        // Back to Top Button
        const backToTopBtn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Intersection Observer for fade-in animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
        
        // Starfield Animation
        function createStarfield() {
            const starfield = document.getElementById('starfield');
            const starCount = 200;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random size between 1px and 3px
                const size = Math.random() * 2 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                // Random position
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                // Random animation duration between 2s and 5s
                const duration = Math.random() * 3 + 2;
                star.style.setProperty('--duration', `${duration}s`);
                
                // Random delay
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starfield.appendChild(star);
            }
        }
        
        // Initialize starfield
        createStarfield();
        
        // Planet data for the solar system explorer
        const planetData = {
            sun: {
                name: "The Sun",
                description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation.",
                distance: "0 AU (Center of Solar System)",
                period: "25-35 days (rotation at equator)",
                diameter: "1,392,700 km (109 × Earth)",
                moons: "0",
                facts: [
                    "Contains 99.86% of the Solar System's mass",
                    "Surface temperature: ~5,500°C",
                    "Core temperature: ~15 million°C",
                    "Will become a red giant in ~5 billion years"
                ]
            },
            mercury: {
                name: "Mercury",
                description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.",
                distance: "0.39 AU from Sun",
                period: "88 Earth days",
                diameter: "4,879 km (0.38 × Earth)",
                moons: "0",
                facts: [
                    "Smallest planet in our solar system",
                    "Surface temperature range: -173°C to 427°C",
                    "Has a very thin exosphere",
                    "Visited by Mariner 10 and MESSENGER"
                ]
            },
            venus: {
                name: "Venus",
                description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. Venus orbits the Sun every 224.7 Earth days.",
                distance: "0.72 AU from Sun",
                period: "225 Earth days",
                diameter: "12,104 km (0.95 × Earth)",
                moons: "0",
                facts: [
                    "Hottest planet with surface at ~465°C",
                    "Atmospheric pressure 92× Earth's",
                    "Rotates backwards (retrograde rotation)",
                    "Brightest natural object in night sky after Moon"
                ]
            },
            earth: {
                name: "Earth",
                description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land with remaining 71% is covered with water.",
                distance: "1 AU from Sun (~150 million km)",
                period: "365.25 days",
                diameter: "12,742 km",
                moons: "1 (The Moon)",
                facts: [
                    "Only known planet with liquid water on surface",
                    "Atmosphere is 78% nitrogen, 21% oxygen",
                    "Orbital speed: ~107,000 km/h",
                    "Tilted 23.5° causing seasons"
                ]
            },
            mars: {
                name: "Mars",
                description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Mars carries the name of the Roman god of war.",
                distance: "1.52 AU from Sun",
                period: "687 Earth days",
                diameter: "6,779 km (0.53 × Earth)",
                moons: "2 (Phobos & Deimos)",
                facts: [
                    "Known as the Red Planet due to iron oxide",
                    "Home to Olympus Mons, solar system's tallest mountain",
                    "Has seasons like Earth but twice as long",
                    "Target for human colonization"
                ]
            },
            jupiter: {
                name: "Jupiter",
                description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
                distance: "5.2 AU from Sun",
                period: "11.86 Earth years",
                diameter: "139,820 km (11 × Earth)",
                moons: "79 known moons",
                facts: [
                    "Largest planet in our solar system",
                    "Great Red Spot is a centuries-old storm",
                    "Has faint rings discovered in 1979",
                    "Strongest magnetic field of all planets"
                ]
            },
            saturn: {
                name: "Saturn",
                description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.",
                distance: "9.58 AU from Sun",
                period: "29.46 Earth years",
                diameter: "116,460 km (9 × Earth)",
                moons: "82 known moons",
                facts: [
                    "Most prominent and extensive ring system",
                    "Least dense planet (would float in water)",
                    "Titan is its largest moon with atmosphere",
                    "Winds can reach 1,800 km/h at equator"
                ]
            },
            uranus: {
                name: "Uranus",
                description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune.",
                distance: "19.22 AU from Sun",
                period: "84 Earth years",
                diameter: "50,724 km (4 × Earth)",
                moons: "27 known moons",
                facts: [
                    "Rotates on its side (98° axial tilt)",
                    "Coldest planetary atmosphere (-224°C)",
                    "Discovered in 1781 by William Herschel",
                    "Has 13 faint rings"
                ]
            },
            neptune: {
                name: "Neptune",
                description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
                distance: "30.05 AU from Sun",
                period: "164.8 Earth years",
                diameter: "49,244 km (3.9 × Earth)",
                moons: "14 known moons",
                facts: [
                    "Discovered through mathematical predictions",
                    "Has strongest winds in solar system (~2,100 km/h)",
                    "Visited only by Voyager 2 in 1989",
                    "Great Dark Spot was a massive storm"
                ]
            }
        };
        
        // Initialize Three.js for planet preview
        function initPlanetPreview() {
            const container = document.getElementById('hero-planet-preview');
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            // Create scene
            const scene = new THREE.Scene();
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);
            
            // Create Earth geometry
            const geometry = new THREE.SphereGeometry(2, 64, 64);
            
            // Load Earth texture
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
            const bumpMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg');
            const specularMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg');
            
            // Create material
            const material = new THREE.MeshPhongMaterial({
                map: texture,
                bumpMap: bumpMap,
                bumpScale: 0.05,
                specularMap: specularMap,
                specular: new THREE.Color('grey'),
                shininess: 5
            });
            
            // Create mesh
            const earth = new THREE.Mesh(geometry, material);
            scene.add(earth);
            
            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0x333333);
            scene.add(ambientLight);
            
            // Add directional light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 3, 5);
            scene.add(directionalLight);
            
            // Add stars
            const starsGeometry = new THREE.BufferGeometry();
            const starCount = 5000;
            const positions = new Float32Array(starCount * 3);
            
            for (let i = 0; i < starCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 2000;
                positions[i3 + 1] = (Math.random() - 0.5) * 2000;
                positions[i3 + 2] = (Math.random() - 0.5) * 2000;
            }
            
            starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const starsMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.5,
                transparent: true,
                opacity: 0.8
            });
            const stars = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(stars);
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                earth.rotation.y += 0.005;
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
        }
        
        // Initialize Three.js for solar system
        function initSolarSystem() {
            const container = document.getElementById('solar-system-container');
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            // Create scene
            const scene = new THREE.Scene();
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.set(0, 20, 50);
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);
            
            // Add orbit controls
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.minDistance = 10;
            controls.maxDistance = 200;
            
            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0x333333);
            scene.add(ambientLight);
            
            // Add directional light (sun)
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(0, 0, 0);
            scene.add(directionalLight);
            
            // Create planets
            const textureLoader = new THREE.TextureLoader();
            const planets = [];
            
            // Sun
            const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
            const sunMaterial = new THREE.MeshBasicMaterial({
                color: 0xffff00,
                map: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/sun_surface.jpg')
            });
            const sun = new THREE.Mesh(sunGeometry, sunMaterial);
            scene.add(sun);
            planets.push({ mesh: sun, name: 'sun', radius: 5, orbitRadius: 0 });
            
            // Create planet function
            function createPlanet(name, color, texturePath, radius, orbitRadius, orbitSpeed) {
                const geometry = new THREE.SphereGeometry(radius, 32, 32);
                const material = new THREE.MeshPhongMaterial({
                    color: color,
                    map: texturePath ? textureLoader.load(texturePath) : null,
                    shininess: 10
                });
                const planet = new THREE.Mesh(geometry, material);
                
                // Position planet in orbit
                planet.position.x = orbitRadius;
                
                // Add to scene
                scene.add(planet);
                
                // Store planet data
                planets.push({
                    mesh: planet,
                    name: name,
                    radius: radius,
                    orbitRadius: orbitRadius,
                    orbitSpeed: orbitSpeed || 0.01
                });
                
                return planet;
            }
            
            // Mercury
            createPlanet('mercury', 0xaaaaaa, null, 0.8, 8, 0.04);
            
            // Venus
            createPlanet('venus', 0xffaa66, null, 1.2, 12, 0.015);
            
            // Earth
            createPlanet('earth', 0x3399ff, 
                'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg', 
                1.3, 16, 0.01);
            
            // Mars
            createPlanet('mars', 0xff6633, null, 1.1, 20, 0.008);
            
            // Jupiter
            createPlanet('jupiter', 0xffcc99, 
                'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/jupiter_surface.jpg', 
                2.8, 28, 0.002);
            
            // Saturn
            const saturn = createPlanet('saturn', 0xffeeaa, null, 2.4, 36, 0.0009);
            
            // Add Saturn rings
            const ringGeometry = new THREE.RingGeometry(3, 4, 32);
            const ringMaterial = new THREE.MeshPhongMaterial({
                color: 0xddddbb,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.8
            });
            const rings = new THREE.Mesh(ringGeometry, ringMaterial);
            rings.rotation.x = Math.PI / 2;
            saturn.add(rings);
            
            // Uranus
            createPlanet('uranus', 0x66ccff, null, 1.7, 44, 0.0004);
            
            // Neptune
            createPlanet('neptune', 0x3366ff, null, 1.6, 52, 0.0001);
            
            // Add stars
            const starsGeometry = new THREE.BufferGeometry();
            const starCount = 5000;
            const positions = new Float32Array(starCount * 3);
            
            for (let i = 0; i < starCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 2000;
                positions[i3 + 1] = (Math.random() - 0.5) * 2000;
                positions[i3 + 2] = (Math.random() - 0.5) * 2000;
            }
            
            starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const starsMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.5,
                transparent: true,
                opacity: 0.8
            });
            const stars = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(stars);
            
            // Raycaster for planet selection
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
            
            function onMouseClick(event) {
                // Calculate mouse position in normalized device coordinates
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                
                // Update the raycaster
                raycaster.setFromCamera(mouse, camera);
                
                // Calculate objects intersecting the raycaster
                const intersects = raycaster.intersectObjects(scene.children);
                
                if (intersects.length > 0) {
                    // Find which planet was clicked
                    for (let i = 0; i < intersects.length; i++) {
                        const object = intersects[i].object;
                        const planet = planets.find(p => p.mesh === object);
                        
                        if (planet) {
                            showPlanetInfo(planet.name);
                            break;
                        }
                    }
                }
            }
            
            window.addEventListener('click', onMouseClick, false);
            
            // Planet info display
            function showPlanetInfo(planetName) {
                const planet = planetData[planetName];
                if (!planet) return;
                
                // Update info panel
                document.getElementById('planet-name').textContent = planet.name;
                document.getElementById('planet-description').textContent = planet.description;
                document.getElementById('planet-distance').textContent = planet.distance;
                document.getElementById('planet-period').textContent = planet.period;
                document.getElementById('planet-diameter').textContent = planet.diameter;
                document.getElementById('planet-moons').textContent = planet.moons;
                
                // Update facts
                const factsList = document.getElementById('planet-facts');
                factsList.innerHTML = '';
                planet.facts.forEach(fact => {
                    const li = document.createElement('li');
                    li.className = 'flex items-start';
                    li.innerHTML = `<i class="fas fa-circle text-xs mt-1.5 mr-2 opacity-50"></i><span>${fact}</span>`;
                    factsList.appendChild(li);
                });
                
                // Show panel
                document.getElementById('planet-info').classList.add('active');
            }
            
            // Handle planet buttons
            document.querySelectorAll('.planet-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const planetName = this.getAttribute('data-planet');
                    showPlanetInfo(planetName);
                    
                    // Center camera on planet
                    const planet = planets.find(p => p.name === planetName);
                    if (planet) {
                        // Calculate position to view planet
                        const planetPosition = planet.mesh.position.clone();
                        const distance = planet.orbitRadius * 1.5;
                        
                        // Create animation to move camera
                        gsap.to(camera.position, {
                            x: planetPosition.x,
                            y: planetPosition.y + distance * 0.3,
                            z: planetPosition.z + distance,
                            duration: 1,
                            ease: "power2.inOut",
                            onUpdate: function() {
                                camera.lookAt(planetPosition);
                            }
                        });
                    }
                });
            });
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                // Rotate planets around the sun
                planets.forEach(planet => {
                    if (planet.orbitRadius > 0) {
                        planet.mesh.position.x = Math.cos(Date.now() * planet.orbitSpeed * 0.001) * planet.orbitRadius;
                        planet.mesh.position.z = Math.sin(Date.now() * planet.orbitSpeed * 0.001) * planet.orbitRadius;
                    }
                    
                    // Rotate planet on its axis
                    planet.mesh.rotation.y += 0.01;
                });
                
                // Update controls
                controls.update();
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
        }
        
        // Initialize Three.js for supernova animation
        function initSupernova() {
            const container = document.getElementById('supernova-canvas');
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            // Create scene
            const scene = new THREE.Scene();
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);
            
            // Create supernova geometry
            const geometry = new THREE.SphereGeometry(1, 64, 64);
            
            // Create material
            const material = new THREE.MeshBasicMaterial({
                color: 0xff6600,
                transparent: true,
                opacity: 0.8
            });
            
            // Create mesh
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);
            
            // Create particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particleCount = 1000;
            const positions = new Float32Array(particleCount * 3);
            
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 2;
                positions[i3 + 1] = (Math.random() - 0.5) * 2;
                positions[i3 + 2] = (Math.random() - 0.5) * 2;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.02,
                transparent: true,
                opacity: 0.8
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);
            
            // Animation variables
            let explosionPhase = 0;
            const maxExplosionPhase = 100;
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                // Animate explosion
                if (explosionPhase < maxExplosionPhase) {
                    explosionPhase++;
                    
                    // Expand sphere
                    const scale = 1 + (explosionPhase / 10);
                    sphere.scale.set(scale, scale, scale);
                    sphere.material.opacity = 0.8 - (explosionPhase / maxExplosionPhase * 0.8);
                    
                    // Expand particles
                    const positions = particlesGeometry.attributes.position.array;
                    for (let i = 0; i < positions.length; i += 3) {
                        positions[i] *= 1.01;
                        positions[i + 1] *= 1.01;
                        positions[i + 2] *= 1.01;
                    }
                    particlesGeometry.attributes.position.needsUpdate = true;
                    
                    // Reset animation after completion
                    if (explosionPhase === maxExplosionPhase) {
                        setTimeout(() => {
                            explosionPhase = 0;
                            sphere.scale.set(1, 1, 1);
                            sphere.material.opacity = 0.8;
                            
                            // Reset particles
                            for (let i = 0; i < positions.length; i += 3) {
                                positions[i] = (Math.random() - 0.5) * 2;
                                positions[i + 1] = (Math.random() - 0.5) * 2;
                                positions[i + 2] = (Math.random() - 0.5) * 2;
                            }
                            particlesGeometry.attributes.position.needsUpdate = true;
                        }, 1000);
                    }
                }
                
                // Rotate particles
                particles.rotation.x += 0.001;
                particles.rotation.y += 0.001;
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
        }
        
        // Initialize Three.js for black hole animation
        function initBlackHole() {
            const container = document.getElementById('blackhole-canvas');
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            // Create scene
            const scene = new THREE.Scene();
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);
            
            // Create black hole geometry
            const geometry = new THREE.SphereGeometry(1, 64, 64);
            
            // Create material
            const material = new THREE.MeshBasicMaterial({
                color: 0x000000,
                transparent: true,
                opacity: 0.9
            });
            
            // Create mesh
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);
            
            // Create accretion disk
            const diskGeometry = new THREE.RingGeometry(1.2, 3, 64);
            const diskMaterial = new THREE.MeshBasicMaterial({
                color: 0x6600ff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.7
            });
            const disk = new THREE.Mesh(diskGeometry, diskMaterial);
            disk.rotation.x = Math.PI / 2;
            scene.add(disk);
            
            // Create particles for gravitational lensing effect
            const particlesGeometry = new THREE.BufferGeometry();
            const particleCount = 500;
            const positions = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);
            
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                const radius = 2 + Math.random() * 3;
                const angle = Math.random() * Math.PI * 2;
                
                positions[i3] = Math.cos(angle) * radius;
                positions[i3 + 1] = (Math.random() - 0.5) * 0.5;
                positions[i3 + 2] = Math.sin(angle) * radius;
                
                sizes[i] = 0.05 + Math.random() * 0.1;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            const particlesMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.1,
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.8
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                // Rotate disk
                disk.rotation.z += 0.01;
                
                // Warp particles around black hole
                const positions = particlesGeometry.attributes.position.array;
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    
                    // Calculate distance from center
                    const x = positions[i3];
                    const z = positions[i3 + 2];
                    const dist = Math.sqrt(x * x + z * z);
                    
                    // Apply gravitational effect
                    if (dist > 1.1) {
                        const angle = Math.atan2(z, x);
                        const newAngle = angle + 0.02 / (dist * dist);
                        
                        positions[i3] = Math.cos(newAngle) * dist;
                        positions[i3 + 2] = Math.sin(newAngle) * dist;
                    } else {
                        // Particles swallowed by black hole
                        positions[i3] = (Math.random() - 0.5) * 0.2;
                        positions[i3 + 1] = (Math.random() - 0.5) * 0.2;
                        positions[i3 + 2] = (Math.random() - 0.5) * 0.2;
                    }
                }
                particlesGeometry.attributes.position.needsUpdate = true;
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
        }
        
        // Initialize Three.js for nebula animation
        function initNebula() {
            const container = document.getElementById('nebula-canvas');
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            // Create scene
            const scene = new THREE.Scene();
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);
            
            // Create nebula particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particleCount = 2000;
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);
            
            // Color palette for nebula
            const colorPalette = [
                new THREE.Color(0x330066), // Deep purple
                new THREE.Color(0x660099), // Purple
                new THREE.Color(0x9900cc), // Bright purple
                new THREE.Color(0xcc00ff), // Pink
                new THREE.Color(0x0066cc), // Blue
                new THREE.Color(0x00ccff), // Light blue
            ];
            
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                
                // Random position in a sphere
                const radius = 1 + Math.random() * 4;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                
                positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i3 + 2] = radius * Math.cos(phi);
                
                // Random color from palette
                const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                colors[i3] = color.r;
                colors[i3 + 1] = color.g;
                colors[i3 + 2] = color.b;
                
                // Random size
                sizes[i] = 0.1 + Math.random() * 0.3;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.2,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });
            
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);
            
            // Create stars
            const starsGeometry = new THREE.BufferGeometry();
            const starCount = 500;
            const starPositions = new Float32Array(starCount * 3);
            
            for (let i = 0; i < starCount; i++) {
                const i3 = i * 3;
                starPositions[i3] = (Math.random() - 0.5) * 10;
                starPositions[i3 + 1] = (Math.random() - 0.5) * 10;
                starPositions[i3 + 2] = (Math.random() - 0.5) * 10;
            }
            
            starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            const starsMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.05,
                transparent: true,
                opacity: 0.8
            });
            const stars = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(stars);
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                // Slowly rotate nebula
                particles.rotation.x += 0.0005;
                particles.rotation.y += 0.0005;
                
                // Pulsate particles for nebula effect
                const time = Date.now() * 0.001;
                const positions = particlesGeometry.attributes.position.array;
                const sizes = particlesGeometry.attributes.size.array;
                
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    
                    // Gentle movement
                    positions[i3] += (Math.random() - 0.5) * 0.002;
                    positions[i3 + 1] += (Math.random() - 0.5) * 0.002;
                    positions[i3 + 2] += (Math.random() - 0.5) * 0.002;
                    
                    // Pulsing size
                    sizes[i] = 0.1 + Math.sin(time + i) * 0.1 + Math.random() * 0.1;
                }
                
                particlesGeometry.attributes.position.needsUpdate = true;
                particlesGeometry.attributes.size.needsUpdate = true;
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
        }
        
        // Initialize all Three.js scenes when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            initPlanetPreview();
            initSolarSystem();
            initSupernova();
            initBlackHole();
            initNebula();
        });
