import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderModule } from './header/header.module';
import { angularaMaterials } from './custom-svg/angular-materials';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CodeComponent } from './pages/code/code.component';
import { AdjustComponent } from './pages/adjust/adjust.component';
import { PullRequestsComponent } from './pages/pull-requests/pull-requests.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { SecurityComponent } from './pages/security/security.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { GitApiService } from './services/git-api.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LayoutComponent,
        CodeComponent,
        AdjustComponent,
        PullRequestsComponent,
        ActionsComponent,
        SecurityComponent,
        InsightsComponent,

    ],
    providers: [
        GitApiService,
        AuthGuard,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        FlexLayoutModule,
        MatButtonModule,
        FormsModule,
        HeaderModule,
        angularaMaterials,
        AppRoutingModule,
        FontAwesomeModule,
        MatDialogModule
    ]
})
export class AppModule {

}
