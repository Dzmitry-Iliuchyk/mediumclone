import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to local storage ', error);
    }
  }
  get(key: string): string {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Error getting data from localStorage', error);
      return null;
    }
  }
}
