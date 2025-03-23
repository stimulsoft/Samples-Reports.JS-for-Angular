import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "printing-the-report-from-code",
    template: `
        <div>
            <button (click)="printPdf_Click()">Print Report as PDF</button>
            <button (click)="printHtml_Click()">Print Report as HTML</button>
        </div>`
})

export class PrintingTheReportFromCode {
    report: Stimulsoft.Report.StiReport;

    printPdf_Click() {
        this.report.printToPdf();
    }

    printHtml_Click() {
        this.report.print();
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Reports/SimpleList.mrt");
    }
}