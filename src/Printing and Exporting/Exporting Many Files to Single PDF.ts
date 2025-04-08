import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "exporting-many-files-to-single-pdf",
    template: `
        <div class="container">
            <h4>This sample demonstrates how to export many report files to one PDF file:</h4>
            <div class="container-button">
                <button (click)="exportPdf()" class="button" [disabled]="isLoading" title="Export Many Report Files to PDF File">{{ isLoading ? 'Please, wait...' : 'Export to PDF' }}</button>
            </div>
        </div>
        `,
    styleUrls: ['../styles.css']
})

export class ExportingManyFilesToSinglePDF {
    isLoading = false;

    async exportPdf() {
        this.isLoading = true;
        await new Promise(resolve => setTimeout(resolve, 0));

        var report = new Stimulsoft.Report.StiReport();
        report.renderedPages.clear();
        report.reportUnit = Stimulsoft.Report.StiReportUnitType.HundredthsOfInch;

        var tempReport = new Stimulsoft.Report.StiReport();
        for (var index = 0; index < 6; index++) {
            tempReport.loadDocumentFile("Reports/MasterDetailSubdetail.mdc");

            for (var page of tempReport.renderedPages.list) {
                page.report = tempReport;
                page.guid = Stimulsoft.System.Guid.newGuidString();
                report.renderedPages.add(page);
            }
        }

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
        this.isLoading = false;
    }
}