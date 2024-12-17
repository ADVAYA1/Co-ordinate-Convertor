
# Coordinate Converter

A web-based tool that allows users to convert between different coordinate systems: **Cartesian**, **Cylindrical**, and **Spherical**. This tool helps in transforming coordinates in various forms, making it useful for anyone working with different coordinate systems in mathematics, physics, and engineering.

## Features

- **Cartesian to Cylindrical**
- **Cartesian to Spherical**
- **Cylindrical to Cartesian**
- **Cylindrical to Spherical**
- **Spherical to Cartesian**
- **Spherical to Cylindrical**

### Example Conversions

- **Cartesian (x, y, z)** → **Cylindrical (r, θ, z)**
- **Cartesian (x, y, z)** → **Spherical (ρ, θ, φ)**
- **Cylindrical (r, θ, z)** → **Cartesian (x, y, z)**
- **Cylindrical (r, θ, z)** → **Spherical (ρ, θ, φ)**
- **Spherical (ρ, θ, φ)** → **Cartesian (x, y, z)**
- **Spherical (ρ, θ, φ)** → **Cylindrical (r, θ, z)**

## Technologies Used

- **HTML**: Structure and layout of the webpage.
- **CSS**: Styling and formatting.
- **JavaScript**: Handling the logic for coordinate conversions.

## How to Use

1. **Open the tool**: Launch the `coordinate-convertor.html` file in your browser.
2. **Enter Coordinates**: 
   - In the "Enter Coordinates to Transform" section, input values for the X, Y, and Z coordinates (for Cartesian or Spherical input).
3. **Select Conversion Type**: 
   - Choose the type of conversion (Cartesian to Cylindrical, etc.) by clicking the corresponding button.
4. **View the Results**: 
   - The converted coordinates will be displayed on the screen in the output section.

## Files Included

- **coordinate-convertor.html**: The main HTML file that creates the user interface for the tool.
- **coordinate-convertor.css**: The CSS file to style the page.
- **coordinate.js**: The JavaScript file that contains the logic for coordinate transformations.

## Example Input & Output

- **Input (Cartesian to Cylindrical)**:
  - X = 3, Y = 4, Z = 5
  - **Output**: Cylindrical Coordinates: (5.000, 0.927, 5)

- **Input (Spherical to Cartesian)**:
  - ρ = 6, θ = 1.2, φ = 2.3
  - **Output**: Cartesian Coordinates: (2.086, 3.993, 3.490)

## How to Contribute

1. **Fork the repository**: Create your own fork of the project.
2. **Create a branch**: Work on a new branch for your changes.
3. **Commit your changes**: Make sure to provide a clear commit message.
4. **Push your changes**: Push your branch to your forked repository.
5. **Create a pull request**: Once you're done, create a pull request with your changes.

## License

This project is open source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

### Notes:
- You can further personalize the README with additional sections (such as installation instructions) depending on how you deploy the tool (locally or on a web server).
