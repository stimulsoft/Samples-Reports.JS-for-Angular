import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "exporting-many-files-to-single-pdf",
    template: `
        <div>
            <button (click)="exportPdf()">Export PDF(about 400 pages)</button>
        </div>`
})

export class ExportingManyFilesToSinglePDF {
    async exportPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.renderedPages.clear();
        report.reportUnit = Stimulsoft.Report.StiReportUnitType.HundredthsOfInch;

        var tempReport = new Stimulsoft.Report.StiReport();
        for (var index = 0; index < 6; index++) {
            tempReport.loadDocumentFile("MasterDetailSubdetail.mdc");

            for (var page of tempReport.renderedPages.list) {
                page.report = tempReport;
                page.guid = Stimulsoft.System.Guid.newGuidString();
                report.renderedPages.add(page);
            }
        }

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}