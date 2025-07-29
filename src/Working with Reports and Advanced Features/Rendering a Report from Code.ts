import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "rendering-report-from-code",
    template: `
        <div>
            <button (click)="renderReport()">Render the Report</button>
            <br /><br />
            <div id="message"></div>
            <pre id="reportJson"></pre>
        </div>`
})

export class RenderingReportFromCode {
    report: Stimulsoft.Report.StiReport;

    async renderReport() {
        await this.report.renderAsync2();

        document.getElementById("message")!.innerText = "The report rendering is completed. Pages: " + this.report.renderedPages.count;
        document.getElementById("reportJson")!.innerText = this.report.saveDocumentToJsonString();
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Reports/SimpleList.mrt");
    }
}