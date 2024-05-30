import { useState, useEffect } from 'react';
import { generateAngles } from '../utils/treeUtils';

const useAngles = (treeId: string) => {
  const [angles, setAngles] = useState<number[]>([]);

  useEffect(() => {
    setAngles(generateAngles(20, 20));
  }, [treeId]);

  return { angles, setAngles };
};
export default useAngles;
