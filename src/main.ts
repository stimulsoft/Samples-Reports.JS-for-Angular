import { bootstrapApplication } from "@angular/platform-browser";
import { ApplicationConfig, Component } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { RouterOutlet } from "@angular/router";

import { LocalizingTheDesigner } from './Localization and Globalization/Localizing the Designer';
import { LocalizingTheViewer } from './Localization and Globalization/Localizing the Viewer';
import { GlobalizingReport } from './Localization and Globalization/Globalizing Report';

import { UsingCustomFont } from './Fonts and Resources/Using a Custom Font';
import { AddingFontToTheResource } from './Fonts and Resources/Adding a Font to the Resource';

import { PrintingTheReportFromCode } from './Printing and Exporting/Printing the Report from Code';
import { ExportingReportToPDF } from './Printing and Exporting/Exporting a Report to PDF';
import { ExportingReportToHTML } from './Printing and Exporting/Exporting a Report to HTML';
import { ExportingReportFromCodeWithChangingExportSettings } from './Printing and Exporting/Exporting a Report from Code with Changing Export Settings';
import { ExportingManyFilesToSinglePDF } from './Printing and Exporting/Exporting Many Files to Single PDF';

import { CreatingNewDataConnectionFromCode } from './Data Connection and Registration/Creating a new Data Connection from code';
import { RegisteringDataFromCode } from './Data Connection and Registration/Registering Data from Code';
import { UsingSqlDataSources } from './Data Connection and Registration/Using SQL Data Sources';
import { UsingParametersInSqlQuery } from './Data Connection and Registration/Using Parameters in SQL Query';
import { UsingCustomDataAdapter } from './Data Connection and Registration/Using a Custom Data Adapter';
import { SupplyCustomHeadersForJsonDatabase } from './Data Connection and Registration/Supply Custom Headers for JSON Database';

import { CustomizingTheDesigner } from './Working with Designer and Viewer Settings and Events/Customizing the Designer';
import { ChangingTheDesignerTheme } from './Working with Designer and Viewer Settings and Events/Changing the Designer Theme';
import { CustomizingTheViewer } from './Working with Designer and Viewer Settings and Events/Customizing the Viewer';
import { ChangingTheViewerTheme } from './Working with Designer and Viewer Settings and Events/Changing the Viewer Theme';
import { ShowingReportInTheViewerWithoutToolbar } from './Working with Designer and Viewer Settings and Events/Showing a Report in the Viewer without Toolbar';
import { UsingDesignerEvents } from './Working with Designer and Viewer Settings and Events/Using Designer Events';
import { UsingViewerEvents } from './Working with Designer and Viewer Settings and Events/Using Viewer Events';
import { WorkingWithOnDesignAndOnExitEvents } from './Working with Designer and Viewer Settings and Events/Working with onDesign and onExit Events';
import { UsingTheTwoViewerInTheOneProject } from './Working with Designer and Viewer Settings and Events/Using the two Viewer in the One Project';
import { GetModifiedReportFromTheDesigner } from './Working with Designer and Viewer Settings and Events/Get a modified Report from the Designer';
import { UsingTheRightToLeftModeInTheViewer } from './Working with Designer and Viewer Settings and Events/Using the Right-To-Left Mode in the Viewer';

import { HowToActivateTheProduct } from './Working with Reports and Advanced Features/How to Activate the Product';
import { RenderingReportFromCode } from './Working with Reports and Advanced Features/Rendering a Report from Code';
import { UsingReportVariablesInCode } from './Working with Reports and Advanced Features/Using Report Variables in Code';
import { CreatingReportAtRuntime } from './Working with Reports and Advanced Features/Creating Report at Runtime';

import { ListSamples } from './ListSamples'

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {

}

const appRoutes: Routes = [
    { path: '', component: ListSamples },

    { path: 'Localizing_the_Designer', component: LocalizingTheDesigner },
    { path: 'Localizing_the_Viewer', component: LocalizingTheViewer },
    { path: 'Globalizing_Report', component: GlobalizingReport },

    { path: 'Using_Custom_Font', component: UsingCustomFont },
    { path: 'Adding_a_Font_to_the_Resource', component: AddingFontToTheResource },

    { path: 'Printing_the_Report_from_Code', component: PrintingTheReportFromCode },
    { path: 'Exporting_a_Report_to_PDF', component: ExportingReportToPDF },
    { path: 'Exporting_a_Report_to_HTML', component: ExportingReportToHTML },
    { path: 'Exporting_a_Report_from_Code_with_Changing_Export_Settings', component: ExportingReportFromCodeWithChangingExportSettings },
    { path: 'Exporting_Many_Files_to_Single_PDF', component: ExportingManyFilesToSinglePDF },

    { path: 'Creating_a_new_Data_Connection_from_code', component: CreatingNewDataConnectionFromCode },
    { path: 'Registering_Data_from_Code', component: RegisteringDataFromCode },
    { path: 'Using_SQL_Data_Sources', component: UsingSqlDataSources },
    { path: 'Using_Parameters_in_SQL_Query', component: UsingParametersInSqlQuery },
    { path: 'Using_a_Custom_Data_Adapter', component: UsingCustomDataAdapter },
    { path: 'Supply_Custom_Headers_for_JSON_Database', component: SupplyCustomHeadersForJsonDatabase },

    { path: 'Customizing_the_Designer', component: CustomizingTheDesigner },
    { path: 'Changing_the_Designer_Theme', component: ChangingTheDesignerTheme },
    { path: 'Customizing_the_Viewer', component: CustomizingTheViewer },
    { path: 'Changing_the_Viewer_Theme', component: ChangingTheViewerTheme },
    { path: 'Showing_a_Report_in_the_Viewer_without_Toolbar', component: ShowingReportInTheViewerWithoutToolbar },
    { path: 'Using_Designer_Events', component: UsingDesignerEvents },
    { path: 'Using_Viewer_Events', component: UsingViewerEvents },
    { path: 'Working_with_onDesign_and_onExit_Events', component: WorkingWithOnDesignAndOnExitEvents },
    { path: 'Using_the_two_Viewer_in_the_One_Project', component: UsingTheTwoViewerInTheOneProject },
    { path: 'Get_a_modified_Report_from_the_Designer', component: GetModifiedReportFromTheDesigner },
    { path: 'Using_the_Right-To-Left_Mode_in_the_Viewer', component: UsingTheRightToLeftModeInTheViewer },

    { path: 'How_to_Activate_the_Product', component: HowToActivateTheProduct },
    { path: 'Rendering_a_Report_from_Code', component: RenderingReportFromCode },
    { path: 'Using_Report_Variables_in_Code', component: UsingReportVariablesInCode },
    { path: 'Creating_Report_at_Runtime', component: CreatingReportAtRuntime }
];

const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes)]
};

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
