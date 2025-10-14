# Adding New Members to Momentum Lab Website

This guide explains how to easily add new members to the Momentum Lab website.

## Quick Steps

### 1. Add Member Data to Config
Edit `src/config.ts` and add the new member to the appropriate section in the `members` object:

#### For PhD Students:
```typescript
phdStudents: [
  // ... existing students
  {
    name: "New Student Name",
    research: "Research Area/Topic",
    email: "email@andrew.cmu.edu",
    photo: "/photos/new_student_name.jpg"
  }
]
```

#### For Master's Students:
```typescript
mastersStudents: [
  // ... existing students
  {
    name: "New Student Name",
    research: "Research Area/Topic",
    email: "email@cmu.edu",
    photo: "/photos/new_student_name.jpg"
  }
]
```

#### For Undergraduate Students:
```typescript
undergraduateStudents: [
  {
    name: "New Student Name",
    research: "Research Area/Topic",
    email: "email@andrew.cmu.edu",
    photo: "/photos/new_student_name.jpg"
  }
]
```

#### For Alumni:
```typescript
alumni: [
  // ... existing alumni
  {
    name: "Alumni Name",
    degree: "Degree Level (e.g., Master Student, PhD Student)",
    research: "Research Area/Topic",
    email: "email@example.com",
    photo: "/photos/alumni_name.jpg"
  }
]
```

### 2. Add Member Photo
1. Add the photo file to `public/photos/` directory
2. Use filename format: `firstname_lastname.jpg` (or .png)
3. Recommended size: 300x300 pixels or larger
4. The website will automatically fallback to placeholder images if photo is not found

### 3. Update Principal Investigator (if needed)
If Jeffrey Ichnowski's information needs updating, edit the `principalInvestigator` object in `src/config.ts`.

## Member Information Fields

- **name**: Full name of the member
- **research**: Brief description of their research area/topic
- **email**: Contact email address
- **photo**: Path to photo file in `/photos/` directory
- **degree** (alumni only): The degree level they were pursuing
- **title** (PI only): Professional title
- **website** (PI only): Personal website URL
- **education** (PI only): Array of education background
- **postdoc** (PI only): Postdoctoral training information
- **links** (PI only): Object containing external links like Google Scholar

## Example: Adding a New Master's Student

```typescript
// In src/config.ts, add to mastersStudents array:
{
  name: "Jane Smith",
  research: "Robot Learning for Household Tasks",
  email: "janesmith@cmu.edu",
  photo: "/photos/jane_smith.jpg"
}
```

Then add `jane_smith.jpg` to the `public/photos/` directory.

## Notes

- The website automatically organizes members by their degree level
- Photos are displayed with fallback placeholders if the image file is missing
- All member cards include contact email links
- The layout is responsive and works on mobile devices
- Changes will be visible immediately when you run `npm run dev`
