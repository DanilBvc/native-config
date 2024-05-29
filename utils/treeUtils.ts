import { generateUUID } from './utils';
import { type Cords, type SlotType } from './../static/types/tree/types';
export const generateCircularCoords = (
  angles: number[],
  baseRadius: number,
  radiusVariation: number,
  centerX: number,
  centerY: number,
  slots: SlotType[]
): Array<Partial<SlotType> & Cords> => {
  const uniqueCount = 20; // Number of unique spheres
  const circlesData = angles.map((angle, i) => {
    const radius = baseRadius + (i % 2 === 0 ? radiusVariation : -radiusVariation);
    const index = i % uniqueCount; // Repeat positions after uniqueCount
    return {
      x: centerX + radius * Math.cos(angles[index]) - 36.5, // 36.5 is half of the width (73/2) to center the sphere
      y: centerY + radius * Math.sin(angles[index]) - 36.5,
      width: 73,
      height: 73,
      id: slots[i] ? slots[i].id : generateUUID(),
      link: slots[i]?.link,
    };
  });

  return circlesData;
};

export const generateAngles = (uniqueCount: number, count: number) => {
  const initialAngles = Array.from(
    { length: uniqueCount },
    (_, i) => (i * 2 * Math.PI) / uniqueCount
  );
  return Array.from({ length: count }, (_, i) => initialAngles[i % uniqueCount]);
};

export const generateSlots = (
  angles: number[],
  baseRadius: number,
  radiusVariation: number,
  centerX: number,
  centerY: number,
  slotsData: SlotType[]
) => {
  return generateCircularCoords(angles, baseRadius, radiusVariation, centerX, centerY, slotsData);
};
