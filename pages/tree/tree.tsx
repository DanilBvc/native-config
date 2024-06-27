import React, { useEffect, useState } from 'react';
import { type RouteProp, useRoute } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

import { TreeService } from '../../services/treeService/treeService';
import PreviewTree from '../../components/tree/previewTree/previewTree';
import { type SlotType, type TreeData } from '../../static/types/tree/types';
import { styles } from './tree.style';

const Tree = () => {
  const [treeData, setTreeData] = useState<null | TreeData>(null);
  const route: RouteProp<{ params: { id: string } }, 'params'> = useRoute();

  const { id } = route.params;
  useEffect(() => {
    TreeService.getUserTree(id).then((data) => {
      setTreeData(data);
    });
  }, [id]);
  const removeById = (id: string) => {
    setTreeData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        slots: prev.slots.filter((item: SlotType) => item.id !== id),
      };
    });
  };

  const addSlot = (slot: SlotType) => {
    setTreeData((prev) => {
      if (!prev) return prev;

      return { ...prev, slots: [...prev.slots, slot] };
    });
  };
  return (
    <>
      <ImageBackground source={require('../../assets/tree-bg.png')} style={styles.image}>
        {treeData && <PreviewTree treeData={treeData} removeById={removeById} addSlot={addSlot} />}
      </ImageBackground>
    </>
  );
};

export default Tree;
