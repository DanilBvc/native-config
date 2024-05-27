import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TreeService } from '../../services/treeService/treeService';
import PreviewTree from '../../components/tree/previewTree/previewTree';
import { type TreeData } from '../../static/types/tree/types';
import { styles } from './tree.style';

const Tree = () => {
  const [treeData, setTreeData] = useState<null | TreeData>(null);
  const route = useRoute();
  const { id } = route.params;
  useEffect(() => {
    TreeService.getUserTree(id).then((data) => {
      setTreeData(data);
    });
  }, [id]);
  return (
    <>
      <Image source={require('../../assets/tree-bg.png')} style={styles.image} />
      {treeData && <PreviewTree treeData={treeData} />}
    </>
  );
};

export default Tree;
