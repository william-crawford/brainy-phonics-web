export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        let modalToRemove = this.modals.find(function (o) { return o.id == id });
        const index = this.modals.indexOf(modalToRemove);
        if (index > -1) {
            this.modals.splice(index, 1);
        }
    }

    open(id: string) {
        // open modal specified by id
        let modal: any = this.modals.find(function (o) { return o.id == id });
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        let modal: any = this.modals.find(function (o) { return o.id == id });
        modal.close();
    }
}