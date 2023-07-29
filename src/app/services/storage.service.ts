import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage-angular";

/**
 * The classwork with the @ionic/storage-angular and is responsible for data storage.
 *
 * @see https://github.com/ionic-team/ionic-storage
 */
@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) {
        this.createStorage();
    }

    async createStorage() {
        await this.storage.create();
    }

    async saveValue(key: string, value: any): Promise<void> {
        await this.storage.set(key, value);
    }

    async getValue(key: string): Promise<any> {
        return await this.storage.get(key);
    }


    async clearValue(key: string): Promise<void> {
        await this.storage.remove(key);
    }

    async clearStorage(): Promise<void> {
        await this.storage.clear();
    }
}
