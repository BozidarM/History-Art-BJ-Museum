import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule ({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatTableModule,
        MatSnackBarModule,
        MatIconModule,
        MatBadgeModule,
        MatSelectModule,
        MatSliderModule,
        MatRadioModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatTableModule,
        MatSnackBarModule,
        MatIconModule,
        MatBadgeModule,
        MatSelectModule,
        MatSliderModule,
        MatRadioModule,
        MatDialogModule
    ]
})

export class MaterialModule {}