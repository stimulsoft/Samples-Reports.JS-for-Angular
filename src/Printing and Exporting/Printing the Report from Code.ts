import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "printing-the-report-from-code",
    template: `
        <div class="container">
            <h4>This sample demonstrates how to print a report:</h4>
            <div class="container-button">
                <button (click)="printPdf_Click()" class="button" title="Print Report as PDF File">Print PDF</button>
                <button (click)="printHtml_Click()" class="button" title="Print Report as HTML File">Print HTML</button>
            </div>
        </div>`
        ,
    styleUrls: ['../styles.css']
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