import { Injectable } from '@angular/core';
import { WhereItem } from '@cartesianui/core';

@Injectable()
export class SearchPermissionForm {
  id: WhereItem = { column: 'id', operator: '=', value: null };
  name: WhereItem = { column: 'name', operator: '=', value: null };
  guard_name: WhereItem = { column: 'guard_name', operator: '=', value: "api" };
}
