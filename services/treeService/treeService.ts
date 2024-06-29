import { authorizedRequest, unauthorizedRequest } from '../../utils/queries';

import { addFile, oneTree, treeTypesUrl } from '../../utils/network';


import { type TreeData } from '../../static/types/tree/types';
import { tokens } from '../../static/constants';
import { type Tree } from '../../static/types/userTypes/types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TreeService {
  static async getUserTree(treeId: string): Promise<TreeData> {
    return await unauthorizedRequest(oneTree(treeId), 'GET');
  }

  static async updateUserTree(treeId: string, data: Tree): Promise<TreeData> {
    return await authorizedRequest(oneTree(treeId), 'PATCH', tokens.refresh_token, data);
  }

  static async addFileSlot(treeId: string, data: FormData): Promise<TreeData> {
    return await authorizedRequest(addFile(treeId), 'POST', tokens.refresh_token, data);
  }

  static async deleteFileSlot(treeId: string): Promise<TreeData> {
    return await authorizedRequest(addFile(treeId), 'DELETE', tokens.refresh_token);

  static async getTypesTrees (): Promise<Array<{ id: string, name: string }>> {
    return await authorizedRequest(treeTypesUrl, 'GET', tokens.access_token);

  }
}
