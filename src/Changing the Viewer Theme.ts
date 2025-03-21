import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "changing-the-viewer-theme",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"  [options]="viewerOptions"></sti-viewer>`
})

export class ChangingTheViewerTheme {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("SimpleList.mrt");

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.appearance.theme = Stimulsoft.Viewer.StiViewerTheme.Office2022WhiteViolet;
        this.viewerOptions.appearance.fullScreenMode = true;
    }
}