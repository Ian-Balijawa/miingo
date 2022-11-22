const loginFields = [
	{
		labelText: "Email address",
		labelFor: "email",
		id: "email",
		name: "email",
		type: "email",
		autoComplete: "email",
		isRequired: true,
		placeholder: "Email address",
	},
	{
		labelText: "Password",
		labelFor: "password",
		id: "password",
		name: "password",
		type: "password",
		autoComplete: "current-password",
		isRequired: true,
		placeholder: "Password",
	},
];
const passwordResetFields = [
	{
		labelText: "Old Password",
		labelFor: "old-password",
		id: "old-password",
		name: "old-password",
		type: "password",
		autoComplete: "current-password",
		isRequired: true,
		placeholder: "Old Password",
	},

	{
		labelText: "New Password",
		labelFor: "new-password",
		id: "new-password",
		name: "new-password",
		type: "password",
		autoComplete: "current-password",
		isRequired: true,
		placeholder: "New Password",
	},
];

const signupFields = [
	{
		labelText: " name",
		labelFor: "name",
		id: "name",
		name: "name",
		type: "text",
		autoComplete: "name",
		isRequired: true,
		placeholder: " name",
	},
	{
		labelText: "Gender",
		labelFor: "gender",
		id: "gender",
		name: "gender",
		type: "text",
		autoComplete: "gender",
		isRequired: true,
		placeholder: "gender",
	},
	{
		labelText: "Email address",
		labelFor: "email",
		id: "email",
		name: "email",
		type: "email",
		autoComplete: "email",
		isRequired: true,
		placeholder: "Email address",
	},
	{
		labelText: "Password",
		labelFor: "password",
		id: "password",
		name: "password",
		type: "password",
		autoComplete: "current-password",
		isRequired: true,
		placeholder: "Password",
	},
];

export { loginFields, signupFields, passwordResetFields };
