import { authorizedRequest, unauthorizedRequest } from '../../utils/queries';

import {
  addFile,
  getComment,
  oneTree,
  treeTypesUrl,
  albumByTreeId,
  updateComment,
} from '../../utils/network';

import { type Album, type TreeData } from '../../static/types/tree/types';
import { tokens } from '../../static/constants';
import { type Tree } from '../../static/types/userTypes/types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TreeService {
  static async getUserTree (treeId: string): Promise<TreeData> {
    return await unauthorizedRequest(oneTree(treeId), 'GET');
  }

  static async updateUserTree (treeId: string, data: Tree): Promise<TreeData> {
    return await authorizedRequest(oneTree(treeId), 'PATCH', tokens.refresh_token, data);
  }

  static async addFileSlot (treeId: string, data: FormData): Promise<TreeData> {
    return await authorizedRequest(addFile(treeId), 'POST', tokens.refresh_token, data);
  }

  static async deleteFileSlot (treeId: string): Promise<TreeData> {
    return await authorizedRequest(addFile(treeId), 'DELETE', tokens.refresh_token);
  }

  static async getTypesTrees (): Promise<Array<{ id: string; name: string }>> {
    return await authorizedRequest(treeTypesUrl, 'GET', tokens.access_token);
  }

  static async updateComment (id: string, data: { comment_title: string }): Promise<TreeData> {
    return await authorizedRequest(updateComment(id), 'PATCH', tokens.refresh_token, data);
  }

  static async getComment (id: string): Promise<TreeData> {
    return await authorizedRequest(getComment(id), 'GET', tokens.refresh_token);
  }

  static async getAlbumByTreeId (id: string): Promise<Album[]> {
    return await authorizedRequest(albumByTreeId(id), 'GET', tokens.access_token);
  }

  static async updateAlbumByTreeId (
    id: string,
    data: { title: string; index: number }
  ): Promise<Album> {
    return await authorizedRequest(albumByTreeId(id), 'PATCH', tokens.access_token, data);
  }
}
