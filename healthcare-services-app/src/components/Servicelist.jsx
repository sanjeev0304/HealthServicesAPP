import React, { useState } from "react";
import './style.css'
import DeleteButton from "./DeleteButton";
const initialServices = [
  {
    name: "General Checkup",
    description: "A complete health checkup to ensure overall well-being.",
    price: "1000",
  },
  {
    name: "Dental Cleaning",
    description: "Professional cleaning to maintain oral hygiene.",
    price: "750",
  },
];

const List = () => {
  // State to manage the list of services
  const [services, setServices] = useState(initialServices);

  // State to handle form inputs
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
  });

  // Function to handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };
  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  // Function to add a new service to the list
  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      setServices([...services, newService]);
      setNewService({ name: "", description: "", price: "" }); // Reset form
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Healthcare Services available!</h1>

      {/* Form to add a new service */}
      <form onSubmit={handleAddService} className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            value={newService.name}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Service Description"
            value={newService.description}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="price"
            placeholder="Service Price"
            value={newService.price}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="btn">Add Service</button>
      </form>

      {/* Display the list of services */}
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h2 className="service-name">{service.name}</h2>
          <p className="service-description">{service.description}</p>
          <p className="service-price"><strong>Price: </strong>{service.price}</p>
          {/* Render DeleteButton for each service */}
          <DeleteButton index={index} deleteService={deleteService} />
        </div>
      ))}
    </div>
  );
};

export default List;
