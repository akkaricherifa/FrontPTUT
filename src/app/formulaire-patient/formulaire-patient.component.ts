import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-patient',
  standalone: true,
  imports: [
    CommonModule, // Importez CommonModule
    ReactiveFormsModule // Importez ReactiveFormsModule
  ],
  templateUrl: './formulaire-patient.component.html',
  styleUrl: './formulaire-patient.component.css'
})
export class FormulairePatientComponent {
  personalForm: FormGroup;
  contactForm: FormGroup;
  previousDoctorForm: FormGroup;


  currentStep: 'personal' | 'contact' | 'previous-doctor' | 'submit' = 'personal';

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required]
    });

    this.contactForm = this.fb.group({
      communeResidence: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.previousDoctorForm = this.fb.group({
      nomMedecin: [''],
      prenomMedecin: [''],
      lieuExercice: [''],
      dureeSuivi: ['']
    });
  }

  nextStep(step: 'personal' | 'contact' | 'previous-doctor' | 'submit') {
    this.currentStep = step;
  }

  onSubmit() {
    if (this.personalForm.valid && this.contactForm.valid) {
      const formData = {
        ...this.personalForm.value,
        ...this.contactForm.value,
        ...this.previousDoctorForm.value
      };
      console.log('Form Submitted', formData);
      // Implement your submission logic here
    }
  }
}