import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "creating-new-data-connection-from-code",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"></sti-viewer>`
})

export class CreatingNewDataConnectionFromCode {
    report: Stimulsoft.Report.StiReport;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("SimpleList.mrt");
        this.report.dictionary.clear();

        var database = new Stimulsoft.Report.Dictionary.StiJsonDatabase("Demo", "Demo.json");
        this.report.dictionary.databases.add(database);
        this.report.dictionary.synchronize();
    }
}