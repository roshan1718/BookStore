import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule  ({ 
    imports :[  MatToolbarModule, 
                MatIconModule, 
                MatInputModule, 
                MatButtonModule,
                MatCardModule,
                MatSelectModule,
                MatGridListModule
            ],
    exports :[  MatToolbarModule, 
                MatIconModule, 
                MatInputModule,
                MatButtonModule,
                MatCardModule,
                MatSelectModule,
                MatGridListModule
            ]
})

export class ImportModule {}
