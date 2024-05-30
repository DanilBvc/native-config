import { authorizedRequest, unauthorizedRequest } from '../../utils/queries';
import { oneTree } from '../../utils/network';
import { type TreeData } from '../../static/types/tree/types';
import { type Tree } from '../../static/types/userTypes/types';
import { tokens } from '../../static/constants';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TreeService {
  static async getUserTree (treeId: string): Promise<TreeData> {
    return await unauthorizedRequest(oneTree(treeId), 'GET');
  }

  static async updateUserTree (treeId: string, data: Tree): Promise<TreeData> {
    return await authorizedRequest(oneTree(treeId), 'PATCH', tokens.refresh_token, data);
  }
}
