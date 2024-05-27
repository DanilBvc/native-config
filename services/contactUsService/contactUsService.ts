import { unauthorizedRequest } from '../../utils/queries';
import { oneTree } from '../../utils/network';
import { type TreeData } from '../../static/types/tree/types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TreeService {
  static async getUserTree (treeId: string): Promise<TreeData> {
    return await unauthorizedRequest(oneTree(treeId), 'GET');
  }
}
