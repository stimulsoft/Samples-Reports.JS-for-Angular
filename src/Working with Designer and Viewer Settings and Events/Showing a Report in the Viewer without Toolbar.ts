import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "showing-report-in-the-viewer-without-toolbar",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"  [options]="viewerOptions"></sti-viewer>`
})

export class ShowingReportInTheViewerWithoutToolbar {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Reports/SimpleList.mrt");

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.toolbar.visible = false;
    }
}