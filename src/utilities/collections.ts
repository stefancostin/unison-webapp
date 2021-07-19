import { uniq } from 'lodash';

export const toSortedSet = (data: string[]) => uniq(data).sort();
