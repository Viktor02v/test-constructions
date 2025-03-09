import * as THREE from 'three';
import { Viewer } from '@speckle/viewer';

export function useMeasurement(viewer: Viewer) {
  const measureDistance = (start: THREE.Vector3, end: THREE.Vector3) => {
    const points = [];
    points.push(start);
    points.push(end);

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const line = new THREE.Line(geometry, material);

    viewer.getWorldTree().scene.add(line);

    const distance = start.distanceTo(end);
    console.log('Distance:', distance);
  };

  return { measureDistance };
}
