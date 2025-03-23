import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "using-viewer-events",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"  [options]="viewerOptions" (onEmailReport)="onEmailReport($event)"></sti-viewer>`
})

export class UsingViewerEvents {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    onEmailReport(args: Stimulsoft.Viewer.EmailReportArgs) {
        alert(`Email: ${args.settings.email} File name:${args.fileName}`);
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Reports/SimpleList.mrt");

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.toolbar.showSendEmailButton = true;
    }

}