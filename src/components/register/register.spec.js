import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Chance from 'chance';
import * as _ from 'lodash';
import Signup from './';
import { FormController } from '../FormController/FormController';

const chance = Chance.Chance();

const registar = shallow(<Signup />);

const mountedRegistrar = mount(<Signup />);

const childAt = element => child => element.childAt(child);

describe('signup component', () => {
  it('Should be a div', () => {
    expect(registar.type()).toEqual('div');
  });

  describe('signup button', () => {
    const button = registar.childAt(0);

    it('Should be a button', () => {
      expect(button.type()).toEqual(Button);
    });

    it('Should say Registar', () => {
      expect(button.childAt(0).text()).toEqual('Register');
    });
  });
  describe('Dialog', () => {
    const dialog = registar.childAt(1);
    it('Should be a dialog', () => expect(dialog.type()).toEqual(Dialog));
    describe('Dialog title', () => {
      const dialogTitle = dialog.childAt(0);
      it('Should be the correct type', () => {
        expect(dialogTitle.type()).toEqual(DialogTitle);
      });
      describe('Dialog title text', () => {
        const dialogTitleText = dialogTitle.childAt(0);
        it('Should be the correct type', () => {
          expect(dialogTitleText.type()).toEqual('h1');
        });
        it('Should have a title', () => {
          const textArea = dialogTitleText.childAt(0);
          expect(textArea.text()).toEqual('Get Started');
        });
      });
    });
    describe('Dialog Content', () => {
      const dialogContent = dialog.childAt(1);

      it('Should be the correct type', () => {
        expect(dialogContent.type()).toEqual(DialogContent);
      });

      describe('Formik form', () => {
        const formikForm = dialogContent.childAt(0);

        it('Should be the correct type', () => {
          expect(formikForm.type()).toEqual(Formik);
        });

        describe('Initial values', () => {
          const initialValues = formikForm.props().initialValues;
          it('Should have the correct intial values', () => {
            expect(initialValues).toEqual({
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            });
          });
        });

        describe('Validation Schema', () => {
          const validationSchema = formikForm.props().validationSchema;
          const validMinFirstName = chance.string({ length: 2 });
          const validMaxFirstName = chance.string({ length: 30 });
          const validMinLastName = chance.string({ length: 2 });
          const validMaxLastName = chance.string({ length: 30 });
          const invalidSmallFirstName = chance.string({ length: 1 });
          const invalidLargeFirstName = chance.string({ length: 31 });
          const invalidSmallLastName = chance.string({ length: 1 });
          const invalidLargeLastName = chance.string({ length: 31 });
          const passwordTooShort = chance.string({ length: 7 });
          const passwordLongEnough = chance.string({ length: 8 });

          const validResponse = {
            firstName: chance.bool() ? validMaxFirstName : validMinFirstName,
            lastName: chance.bool() ? validMaxLastName : validMinLastName,
            email: chance.email(),
            password: passwordLongEnough,
          };

          const invalidLongResponse = {
            firstName: invalidLargeFirstName,
            lastName: invalidLargeLastName,
            email: chance.string(),
            password: passwordTooShort,
          };

          const invalidShortResponse = {
            firstName: invalidSmallFirstName,
            lastName: invalidSmallLastName,
            email: chance.string(),
            password: passwordTooShort,
          };

          it('Should exist', () => {
            expect(validationSchema).toBeTruthy();
          });

          it('Should validate a valid request', async () => {
            const result = await validationSchema.isValid(validResponse);
            expect(result).toEqual(true);
          });

          it('Should not validate if the first name is too long', async (done) => {
            validationSchema.validateAt('firstName', invalidLongResponse).catch((error) => {
              expect(error.message).toEqual('First name is too long!');
              done();
            });
          });

          it('Should not validate if the last name is too long', async (done) => {
            validationSchema.validateAt('lastName', invalidLongResponse).catch((error) => {
              expect(error.message).toEqual('Last name is too long!');
              done();
            });
          });

          it('Should not validate if the first name is too short', async (done) => {
            validationSchema.validateAt('firstName', invalidShortResponse).catch((error) => {
              expect(error.message).toEqual('First name is too short!');
              done();
            });
          });

          it('Should not validate if the last name is too short', async (done) => {
            validationSchema.validateAt('lastName', invalidShortResponse).catch((error) => {
              expect(error.message).toEqual('Last name is too short!');
              done();
            });
          });

          it('Should not validate object without required first name', async () => {
            const filteredObject = _.omit(validResponse, ['firstName']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });

          it('Should not validate object without required last name', async () => {
            const filteredObject = _.omit(validResponse, ['lastName']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });

          it('Should not validate object without required email', async () => {
            const filteredObject = _.omit(validResponse, ['email']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });

          it('Should not validate object without required password', async () => {
            const filteredObject = _.omit(validResponse, ['password']);
            const result = await validationSchema.isValid(filteredObject);
            expect(result).toEqual(false);
          });
        });

        describe('form', () => {
          const renderedForm = formikForm
            .dive()
            .childAt(0)
            .childAt(0);
          it('Should be the correct type', () => {
            expect(renderedForm.type()).toEqual(Form);
          });

          const childAtForm = childAt(renderedForm);

          describe('name row', () => {
            const nameRow = childAtForm(0);
            const childAtNameRow = childAt(nameRow);
            it('Should be the correct type', () => {
              expect(nameRow.type()).toEqual('div');
            });

            describe('first name Div', () => {
              const firstNameDiv = childAtNameRow(0);
              const childAtfirstName = childAt(firstNameDiv);
              it('Should be the correct type', () => {
                expect(firstNameDiv.type()).toEqual('div');
              });

              describe('first name Field', () => {
                const firstNameField = childAtfirstName(0);
                const firstNameFieldProps = firstNameField.props();
                it('Should be the correct type', () => {
                  expect(firstNameField.type()).toEqual(Field);
                });

                it('Should have the correct name prop', () => {
                  expect(firstNameFieldProps.name).toEqual('firstName');
                });

                describe('FormController', () => {
                  const mountedfirstNameFormController = mountedRegistrar.find(
                    '#firstNameFormController',
                  );
                  const formControllerProps = mountedfirstNameFormController.props();
                  expect(mountedfirstNameFormController.type()).toEqual(FormController);

                  it('Should have the correct label prop', () => {
                    expect(formControllerProps.label).toEqual('First Name');
                  });

                  it('Should have the correct id prop', () => {
                    expect(formControllerProps.id).toEqual('firstNameFormController');
                  });

                  it('Should have the correct type prop', () => {
                    expect(formControllerProps.type).toEqual('text');
                  });
                });
              });
              describe('first name ErrorMessage', () => {
                const firstNameInput = childAtfirstName(1);
                it('Should be the correct type', () => {
                  expect(firstNameInput.type()).toEqual(ErrorMessage);
                });
              });
            });

            describe('last name Div', () => {
              const lastNameDiv = childAtNameRow(1);
              const childAtlastName = childAt(lastNameDiv);
              it('Should be the correct type', () => {
                expect(lastNameDiv.type()).toEqual('div');
              });

              describe('last name Field', () => {
                const lastNameField = childAtlastName(0);
                const lastNameFieldProps = lastNameField.props();
                it('Should be the correct type', () => {
                  expect(lastNameField.type()).toEqual(Field);
                });

                it('Should have the correct name prop', () => {
                  expect(lastNameFieldProps.name).toEqual('lastName');
                });

                describe('FormController', () => {
                  const mountedlastNameFormController = mountedRegistrar.find(
                    '#lastNameFormController',
                  );
                  const formControllerProps = mountedlastNameFormController.props();
                  expect(mountedlastNameFormController.type()).toEqual(FormController);

                  it('Should have the correct label prop', () => {
                    expect(formControllerProps.label).toEqual('Last Name');
                  });

                  it('Should have the correct id prop', () => {
                    expect(formControllerProps.id).toEqual('lastNameFormController');
                  });

                  it('Should have the correct type prop', () => {
                    expect(formControllerProps.type).toEqual('text');
                  });
                });
              });
              describe('last name ErrorMessage', () => {
                const lastNameInput = childAtlastName(1);
                it('Should be the correct type', () => {
                  expect(lastNameInput.type()).toEqual(ErrorMessage);
                });
              });
            });
          });

          describe('email Div', () => {
            const emailDiv = childAtForm(1);
            const childAtemailName = childAt(emailDiv);
            it('Should be the correct type', () => {
              expect(emailDiv.type()).toEqual('div');
            });
            describe('email Field', () => {
              const emailField = childAtemailName(0);
              const emailFieldProps = emailField.props();
              it('Should be the correct type', () => {
                expect(emailField.type()).toEqual(Field);
              });

              it('Should have the correct name prop', () => {
                expect(emailFieldProps.name).toEqual('email');
              });

              describe('FormController', () => {
                const mountedemailFormController = mountedRegistrar.find('#emailFormController');
                const formControllerProps = mountedemailFormController.props();
                expect(mountedemailFormController.type()).toEqual(FormController);

                it('Should have the correct label prop', () => {
                  expect(formControllerProps.label).toEqual('Email');
                });

                it('Should have the correct id prop', () => {
                  expect(formControllerProps.id).toEqual('emailFormController');
                });

                it('Should have the correct type prop', () => {
                  expect(formControllerProps.type).toEqual('email');
                });
              });
            });
            describe('email ErrorMessage', () => {
              const emailInput = childAtemailName(1);
              it('Should be the correct type', () => {
                expect(emailInput.type()).toEqual(ErrorMessage);
              });
            });
          });

          describe('password Div', () => {
            const passwordDiv = childAtForm(2);
            const childAtpasswordName = childAt(passwordDiv);
            it('Should be the correct type', () => {
              expect(passwordDiv.type()).toEqual('div');
            });
            describe('password Field', () => {
              const passwordField = childAtpasswordName(0);
              const passwordFieldProps = passwordField.props();
              it('Should be the correct type', () => {
                expect(passwordField.type()).toEqual(Field);
              });

              it('Should have the correct name prop', () => {
                expect(passwordFieldProps.name).toEqual('password');
              });

              describe('FormController', () => {
                const mountedpasswordFormController = mountedRegistrar.find(
                  '#passwordFormController',
                );
                const formControllerProps = mountedpasswordFormController.props();
                expect(mountedpasswordFormController.type()).toEqual(FormController);

                it('Should have the correct label prop', () => {
                  expect(formControllerProps.label).toEqual('Password');
                });

                it('Should have the correct id prop', () => {
                  expect(formControllerProps.id).toEqual('passwordFormController');
                });

                it('Should have the correct type prop', () => {
                  expect(formControllerProps.type).toEqual('password');
                });
              });
            });
            describe('password ErrorMessage', () => {
              const passwordInput = childAtpasswordName(1);
              it('Should be the correct type', () => {
                expect(passwordInput.type()).toEqual(ErrorMessage);
              });
            });
          });
          describe('button', () => {
            const button = childAtForm(3);
            it('Should be the correct type', () => {
              expect(button.type()).toEqual('button');
            });
            it('Should have the correct text', () => {
              const textArea = button.childAt(0);
              expect(textArea.text()).toEqual('Sign Up');
            });
          });
        });
      });
    });
  });
});
