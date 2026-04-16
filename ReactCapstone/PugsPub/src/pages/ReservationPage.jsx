import React, { useState } from 'react';
import pugspub from "../assets/pugspub.png";

const ReservationPage = () => {
    const [formData, setFormData] = useState({
        mealType: 'breakfast',
        firstName: '',
        lastName: '',
        email: '',
        partySize: 2,
        date: '',
        time: '',
        phone: '',
        seating: 'Indoor',
        dietary: '',
        newsletter: false
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation submitted:", formData);

        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                mealType: 'breakfast',
                firstName: '',
                lastName: '',
                email: '',
                partySize: 2,
                date: '',
                time: '',
                phone: '',
                seating: 'Indoor',
                dietary: '',
                newsletter: false
            });
        }, 3000);
    };

    return (
        <div className="content-wrapper position-relative z-3 py-5">
            <div className="header1 text-center py-4">
                <img
                    src={pugspub}
                    alt="Pugs Pub"
                    className="logo-img"
                />
            </div>

            <div className="container">
                <div className="resForm mx-auto">
                    <h1 className="resCaption text-center mb-4">Reserve your Spot!</h1>
                    <p className="resCaption text-center lead mb-5">
                        Secure your stool in the steam — reserve now and join the<br />
                        wrinkled revolution at Pugs Pub.<br />
                        Requests are noted with care, but there's no guarantee of fulfillment
                        due to high demand and limited brass perches.
                    </p>

                    {submitted ? (
                        <div className="alert alert-success text-center p-5">
                            <h3>✅ Reservation Request Received!</h3>
                            <p className="lead mt-3">
                                Thank you! Sir Pugsley’s staff will review your request and get back to you shortly.<br />
                                <strong>Pawprint approved.</strong>
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Meal Type */}
                            <h2 className="resHead mb-3">Meal Type</h2>
                            <div className="d-flex flex-wrap gap-4 mb-4">
                                {['breakfast', 'lunch', 'dinner'].map(type => (
                                    <div className="form-check" key={type}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="mealType"
                                            id={type}
                                            value={type}
                                            checked={formData.mealType === type}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={type}>
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        maxLength="20"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        maxLength="20"
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="enter@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="partySize" className="form-label">Party Size</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="partySize"
                                        name="partySize"
                                        min="1"
                                        max="8"
                                        value={formData.partySize}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="time" className="form-label">Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <h2 className="resHead mt-5 mb-3">Seating Preference</h2>
                            <div className="d-flex flex-wrap gap-4 mb-4">
                                {['Indoor', 'Outdoor', 'Private Room'].map(seat => (
                                    <div className="form-check" key={seat}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="seating"
                                            id={seat.toLowerCase().replace(' ', '')}
                                            value={seat}
                                            checked={formData.seating === seat}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={seat.toLowerCase().replace(' ', '')}>
                                            {seat}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="dietary" className="form-label">Dietary Considerations?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dietary"
                                    name="dietary"
                                    value={formData.dietary}
                                    onChange={handleChange}
                                    maxLength="30"
                                    placeholder="e.g. No kibble, extra drool"
                                />
                            </div>

                            <div className="form-check mb-5">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="newsletter"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="newsletter">
                                    Would you like to opt in for the "Pugs Pub" newsletter?
                                </label>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="buttons btn btn-lg px-5 me-3">
                                    Submit Reservation
                                </button>
                                <button
                                    type="button"
                                    className="buttons btn btn-lg px-5"
                                    onClick={() => window.location.reload()}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReservationPage;