"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Line,
} from "@react-three/drei";
import { useRef } from "react";

function Meter(props: any) {
  return (
    <group {...props}>
      <mesh>
        <boxGeometry args={[1, 1.5, 0.4]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      <mesh position={[0, 0.2, 0.22]}>
        <boxGeometry args={[0.55, 0.4, 0.05]} />
        <meshStandardMaterial
          color="#00C2FF"
          emissive="#00C2FF"
        />
      </mesh>
    </group>
  );
}

function Tower(props: any) {
  return (
    <group {...props}>
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 4]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.5, 0.1, 0.1]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

function Building(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1.5, 4, 1.5]} />
      <meshStandardMaterial color="#1e293b" />
    </mesh>
  );
}

function CloudNode(props: any) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    const scale =
      1 + Math.sin(clock.elapsedTime * 2) * 0.15;

    if (ref.current) {
      ref.current.scale.set(
        scale,
        scale,
        scale
      );
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[0.8, 32, 32]} />

      <meshStandardMaterial
        color="#00D084"
        emissive="#00D084"
        emissiveIntensity={2}
      />
    </mesh>
  );
}

function DataPacket({
  radius = 4,
  speed = 1,
}: {
  radius?: number;
  speed?: number;
}) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;

    if (ref.current) {
      ref.current.position.x =
        Math.cos(t) * radius;

      ref.current.position.z =
        Math.sin(t) * radius;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.12, 16, 16]} />

      <meshStandardMaterial
        color="#00C2FF"
        emissive="#00C2FF"
      />
    </mesh>
  );
}

function AnalyticsCore() {
  return (
    <mesh position={[1, 4, 2]}>
      <torusGeometry
        args={[1.2, 0.08, 16, 100]}
      />

      <meshStandardMaterial
        color="#00C2FF"
        emissive="#00C2FF"
      />
    </mesh>
  );
}

function UtilityNode(props: any) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.25, 16, 16]} />

      <meshStandardMaterial
        color="#FFD000"
        emissive="#FFD000"
      />
    </mesh>
  );
}

function EnergyBeam({
  points,
  color,
}: {
  points: [number, number, number][];
  color: string;
}) {
  return (
    <Line
      points={points}
      color={color}
      lineWidth={4}
    />
  );
}

function KpiRing({
  position,
}: {
  position: [number, number, number];
}) {
  const ref = useRef<any>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
    >
      <torusGeometry
        args={[0.8, 0.05, 16, 100]}
      />

      <meshStandardMaterial
        color="#00C2FF"
        emissive="#00C2FF"
      />
    </mesh>
  );
}

function AlertBeacon(props: any) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.emissiveIntensity =
        1 + Math.sin(clock.elapsedTime * 6);
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry
        args={[0.25, 16, 16]}
      />

      <meshStandardMaterial
        color="#ff3b30"
        emissive="#ff3b30"
      />
    </mesh>
  );
}

export default function InfrastructureScene() {
  return (
    <Canvas
      camera={{
        position: [0, 5, 14],
        fov: 50,
      }}
    >
      <>
        {/* LIGHTING */}

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[10, 10, 10]}
          intensity={3}
        />

        {/* GROUND */}

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <planeGeometry args={[50, 50]} />

          <meshStandardMaterial
            color="#07101c"
          />
        </mesh>

        {/* BUILDINGS */}

        <Building position={[-8, 2, -5]} />
        <Building position={[-6, 3, -6]} />
        <Building position={[-3, 2.5, -5]} />
        <Building position={[0, 4, -6]} />
        <Building position={[3, 3, -5]} />
        <Building position={[6, 2.5, -6]} />
        <Building position={[8, 2, -5]} />

        {/* SMART METERS */}

        <Float speed={2}>
          <Meter position={[-7, 0, 3]} />
        </Float>

        <Float speed={2.2}>
          <Meter position={[-4, 0, 3]} />
        </Float>

        <Float speed={2.4}>
          <Meter position={[-1, 0, 3]} />
        </Float>

        <Float speed={2.1}>
          <Meter position={[2, 0, 3]} />
        </Float>

        <Float speed={2.3}>
          <Meter position={[5, 0, 3]} />
        </Float>

        <Float speed={2.5}>
          <Meter position={[8, 0, 3]} />
        </Float>

        {/* TOWERS */}

        <Tower position={[-3, 1, 0]} />
        <Tower position={[3, 1, 0]} />

        {/* CLOUD */}

        <CloudNode position={[1, 4, 2]} />

        {/* ANALYTICS CORE */}

        <AnalyticsCore />

        {/* UTILITY NODES */}

        <UtilityNode position={[-7, 1, 3]} />
        <UtilityNode position={[-4, 1, 3]} />
        <UtilityNode position={[-1, 1, 3]} />
        <UtilityNode position={[2, 1, 3]} />
        <UtilityNode position={[5, 1, 3]} />
        <UtilityNode position={[8, 1, 3]} />

        {/* Energy Beams */}

       <EnergyBeam
  color="#00C2FF"
  points={[
    [-7, 0, 3],
    [-3, 1, 0],
    [1, 4, 2],
  ]}
/>

<EnergyBeam
  color="#00D084"
  points={[
    [-4, 0, 3],
    [-3, 1, 0],
    [1, 4, 2],
  ]}
/>

<EnergyBeam
  color="#FFD000"
  points={[
    [-1, 0, 3],
    [-3, 1, 0],
    [1, 4, 2],
  ]}
/>

<EnergyBeam
  color="#00C2FF"
  points={[
    [2, 0, 3],
    [3, 1, 0],
    [1, 4, 2],
  ]}
/>

<EnergyBeam
  color="#00D084"
  points={[
    [5, 0, 3],
    [3, 1, 0],
    [1, 4, 2],
  ]}
/>

<EnergyBeam
  color="#FFD000"
  points={[
    [8, 0, 3],
    [3, 1, 0],
    [1, 4, 2],
  ]}
/>

{/* KPI Rings  */}

<KpiRing position={[-6, 4, -4]} />

<KpiRing position={[0, 5, -5]} />

<KpiRing position={[6, 4, -4]} />

{/* Alert Beacons  */} 

<AlertBeacon
  position={[-3, 2, -5]}
/>

<AlertBeacon
  position={[3, 3, -5]}
/>

        {/* DATA PACKETS */}

        <DataPacket
          radius={3}
          speed={0.6}
        />

        <DataPacket
          radius={4}
          speed={0.8}
        />

        <DataPacket
          radius={5}
          speed={1.1}
        />

        <DataPacket
          radius={6}
          speed={0.4}
        />

        {/* CONTROLS */}

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </>
    </Canvas>
  );
}