import { Component } from "@angular/core";
import { Designer, Stimulsoft } from "stimulsoft-reports-js-angular/designer";

@Component({
    selector: "localization-the-designer",
    imports: [Designer],
    template: `<sti-designer [(report)]="report"  [options]="designerOptions"></sti-designer>`
})

export class LocalizingTheDesigner {
    report: Stimulsoft.Report.StiReport;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("SimpleList.mrt");

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.fullScreenMode = true;

        Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("de.xml");

        // Add a localization file to the menu and use a custom label. Note that the file will not load until it is chosen
        Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("ja.xml", false, "MyLabel");

        // Add a localization file to the menu and load the file when the designer is started
        Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("ko.xml", true);

        // Add a localization file and set it as the default. The default file will be loaded before the designer starts
        Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("pt.xml", true);
        Stimulsoft.Base.Localization.StiLocalization.cultureName = 'Portuguese';
    }
}