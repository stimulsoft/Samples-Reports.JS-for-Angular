import { Component } from "@angular/core";
import { Designer, Stimulsoft } from "stimulsoft-reports-js-angular/designer";

@Component({
    selector: "get-modified-report-from-the-designer",
    imports: [Designer],
    template: `<sti-designer [(report)]="report"  [options]="designerOptions" (onAssignedReport)="onAssignedReport($event)"></sti-designer>`
})

export class GetModifiedReportFromTheDesigner {
    report: Stimulsoft.Report.StiReport;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;

    onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
        alert("The link to the report has been changed");
        this.report = args.report;
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Reports/SimpleList.mrt");

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.fullScreenMode = true;
    }
}