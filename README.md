# Dashboard Page Assignment

## Project Overview

This project is a dynamic dashboard page built using React. The dashboard allows users to add and remove widgets under different categories dynamically. The project uses a JSON structure to build the dashboard and manage the categories and widgets. Users can also search for widgets in a list.

## Features

1. **Dynamic Categories and Widgets**: The dashboard is built from a JSON structure, allowing multiple categories, each containing multiple widgets.
2. **Add/Remove Widgets**: Users can dynamically add widgets by specifying a name and text for the widget. Widgets can also be removed from their respective categories.
3. **Search Widgets**: Users can search through a list of all available widgets.
4. **State Management**: State management is handled using a store management tool (e.g., Redux or React Context API).

## Technologies Used

- **Frontend**: React.js
- **State Management**: [Specify the tool you used, e.g., Redux, React Context API]
- **Styling**: [Specify any CSS framework or styling method used, e.g., CSS Modules, Styled Components]
- **Other Dependencies**: [List any other significant libraries used]

## Getting Started

### Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js (v14 or later)
- npm

### Installation

1. Clone the repository to your local machine:

   ```bash
    git clone https://github.com/hzratali/Accuknox-Assignment.git
    cd Accuknox-Assignment
   ```

2. Install the project dependencies:

 ```bash
   npm install
 ```

Running the Application
To run the application locally:

a. Start the development server:
```bash
   npm run dev
```
b. Open your browser and navigate to:
```bash
   http://localhost:5173/
```

JSON Structure Example
The dashboard is built dynamically using the following JSON structure:

```
[
  {
    "CSPM Executive Dashboard": [
      {
        "id": 4356,
        "display": true,
        "type": "line",
        "category": "total",
        "title": "Cloud Accounts",
        "data": [
          {
            "signatures": 30,
            "color": "#C1876B"
          },
          {
            "annoys": 2,
            "color": "#6A5F31"
          },
          {
            "unbale": 2,
            "color": "#D95030"
          },
          {
            "vouchers": 2,
            "color": "#332F2C"
          },
          {
            "flentes": 2,
            "color": "#4C9141"
          },
          {
            "tetragonally": 2,
            "color": "#E7EBDA"
          },
          {
            "outstunting": 2,
            "color": "#4A192C"
          },
          {
            "wineiest": 2,
            "color": "#686C5E"
          },
          {
            "tollgate": 2,
            "color": "#45322E"
          },
          {
            "wadders": 2,
            "color": "#EAE6CA"
          },
          {
            "cyclist": 2,
            "color": "#F39F18"
          },
          {
            "gruf": 2,
            "color": "#5E2129"
          }
        ]
      },
      {
        "id": 4656,
        "display": true,
        "type": "round",
        "category": "total",
        "title": "Scene",
        "data": [
          {
            "woodbines": 2,
            "color": "#6C4675"
          },
          {
            "bare": 2,
            "color": "#0A0A0A"
          },
          {
            "immunologist": 2,
            "color": "#C7B446"
          },
          {
            "fused": 2,
            "color": "#8A6642"
          }
        ]
      },
      {
        "id": 4386,
        "display": true,
        "type": "round",
        "category": "total",
        "title": "Assignment",
        "data": [
          {
            "dynamics": 2,
            "color": "#015D52"
          },
          {
            "maximally": 2,
            "color": "#755C48"
          }
        ]
      },
      {
        "id": 4352,
        "display": true,
        "type": "round",
        "category": "total",
        "title": "Inspection",
        "data": [
          {
            "asseize": 2,
            "color": "#4C514A"
          },
          {
            "uncorruptly": 2,
            "color": "#D84B20"
          }
        ]
      },
      {
        "id": 7457,
        "display": true,
        "type": "round",
        "category": "total",
        "title": "Cloud Account Risk Assessment",
        "data": [
          {
            "failed": 32,
            "color": "#D53032"
          },
          {
            "warning": 82,
            "color": "#78858B"
          },
          {
            "not_availabe": 42,
            "color": "#CF3476"
          },
          {
            "passed": 200,
            "color": "#FFA420"
          }
        ]
      }
    ],
    "id": 34563
  },
  {
    "CWPP Dashboard": [
      {
        "id": 5638,
        "type": "line",
        "display": true,
        "category": "NA",
        "title": "Top 5 Namespace Specific Alerts",
        "data": []
      },
      {
        "id": 8645,
        "type": "none",
        "display": true,
        "category": "total",
        "title": "Workload Alerts",
        "data": [
          {
            "basket": 45,
            "color": "#4A362F"
          }
        ]
      }
    ],
    "id": 53673
  },
  {
    "Registry Scan": [
      {
        "id": 9457,
        "display": true,
        "type": "line",
        "category": "Total Vulnerabilities",
        "title": "Image Risk Assessment",
        "data": [
          {
            "failed": 12,
            "color": "#FAD201"
          },
          {
            "warning": 65,
            "color": "#592321"
          },
          {
            "not_availabe": 234,
            "color": "#AF2B1E"
          },
          {
            "passed": 756,
            "color": "#EFA94A"
          }
        ]
      },
      {
        "id": 7458,
        "display": true,
        "type": "line",
        "category": "Total Images",
        "title": "Image Security Issues",
        "data": [
          {
            "critical": 50,
            "color": "#FF2301"
          },
          {
            "High": 80,
            "color": "#922B3E"
          },
          {
            "normal": 350,
            "color": "#6C7156"
          },
          {
            "low": 20,
            "color": "#B32428"
          }
        ]
      },
      {
        "id": 4552,
        "display": false,
        "type": "line",
        "category": "total",
        "title": "Cloud Accounts",
        "data": [
          {
            "connected": 30,
            "color": "#C1876B"
          },
          {
            "connected": 2,
            "color": "#6A5F31"
          },
          {
            "connected": 2,
            "color": "#D95030"
          },
          {
            "not_connected": 2,
            "color": "#332F2C"
          },
          {
            "not_connected": 2,
            "color": "#4C9141"
          },
          {
            "not_connected": 2,
            "color": "#E7EBDA"
          },
          {
            "not_connected": 2,
            "color": "#4A192C"
          },
          {
            "not_connected": 2,
            "color": "#686C5E"
          },
          {
            "not_connected": 2,
            "color": "#45322E"
          },
          {
            "not_connected": 2,
            "color": "#EAE6CA"
          },
          {
            "not_connected": 2,
            "color": "#F39F18"
          },
          {
            "not_connected": 2,
            "color": "#5E2129"
          }
        ]
      }
    ],
    "id": 86436
  }
]
```
