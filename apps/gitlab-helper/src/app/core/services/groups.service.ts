import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient) {}

  getGroups() {
    return this.http.get<any>(`${AppConfigService.config.api}groups/`);
  }

  getGroupById(id: any) {
    return this.http.get<any>(`${AppConfigService.config.api}groups/${id}/`);
  }

  getBoardsByGroupId(id: any) {
    return this.http.get<any>(`${AppConfigService.config.api}groups/${id}/boards/`);
  }

  getIssues(groupId: any, label: string, filteredBoard?: any, assigneeId?: number) {
    if (assigneeId > 0) {
      return this.http.get<any>(
        // `${AppConfigService.config.api}groups/${groupId}/issues/?labels=${label},${filteredBoard}&assignee_id=${assigneeId}&with_labels_details=true`
        `${AppConfigService.config.api}groups/${groupId}/issues/?labels=${label}&assignee_id=${assigneeId}&with_labels_details=true`
      );
    } else {
      return this.http.get<any>(
        `${AppConfigService.config.api}groups/${groupId}/issues/?labels=${label}&with_labels_details=true`
      );
    }
  }

  getAssigneesByGroup(groupId: any) {
    return this.http.get<any>(`${AppConfigService.config.api}groups/${groupId}/members/`);
  }

  getLabelsByGroup(groupId: number) {
    return this.http.get<any>(`${AppConfigService.config.api}groups/${groupId}/labels/`);
  }
}
