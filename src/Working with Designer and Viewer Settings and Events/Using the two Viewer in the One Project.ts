import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "using-the-two-viewer-in-the-one-project",
    imports: [Viewer],
    template: `
        <div class="container">
            <h4>This sample demonstrates how to add two viewers to one page:</h4>
            <div class="container-viewer">
                <div>
                    <sti-viewer [report]="report1" [options]="viewerOptions"></sti-viewer>
                </div>
                <div>
                    <sti-viewer [report]="report2" [options]="viewerOptions"></sti-viewer>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['../styles.css']
})

export class UsingTheTwoViewerInTheOneProject {
    report1: Stimulsoft.Report.StiReport;
    report2: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    constructor() {
        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.appearance.scrollbarsMode = true;
        this.viewerOptions.height = "100vh";

        this.report1 = new Stimulsoft.Report.StiReport();
        this.report1.loadFile("Reports/SimpleList.mrt");

        this.report2 = new Stimulsoft.Report.StiReport();
        this.report2.loadFile("Reports/TwoSimpleLists.mrt");
    }
}