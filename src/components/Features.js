import React, { useEffect, useState, useRef } from 'react';
import { FaBatteryThreeQuarters, FaMusic, FaCog, FaInfoCircle, FaMapPin } from 'react-icons/fa';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  const features = [
    {
      icon: <FaBatteryThreeQuarters />,
      title: "Battery Alert",
      description: "Notifies the user when the battery reaches 80%. (Soon Customizable)",
      href: "#battery-alert"
    },
    {
      icon: <FaMusic />,
      title: "Music Alert",
      description: "Plays music until the charger is unplugged.",
      href: "#music-alert"
    },
    {
      icon: <FaMapPin />,  // Replacing FaPin with FaMapPin
      title: "Tray Icon",
      description: "Displays the current battery percentage in the system tray.",
      href: "#tray-icon"
    },
    {
      icon: <FaInfoCircle />,
      title: "Battery Status Tooltip",
      description: "Shows detailed battery status in the tray icon tooltip. (Soon)",
      href: "#tooltip"
    },
    {
      icon: <FaCog />,
      title: "Customizable Alerts",
      description: "Will allow users to customize alert sounds and notification settings. (Soon)",
      href: "#customizable-alerts"
    }
  ];

  useEffect(() => {
    const featuresElement = featuresRef.current; // Store ref value in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optional: Hide on leaving view
        }
      },
      { threshold: 0.3 }
    );

    if (featuresElement) {
      observer.observe(featuresElement);
    }

    return () => {
      if (featuresElement) {
        observer.unobserve(featuresElement); // Cleanup using the stored variable
      }
    };
  }, []);

  return (
    <section
      ref={featuresRef}
      id="features-container"  // Ensure this matches the href in the nav
      className={`features-container ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h2 className="features-title">Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.href}
            className="feature-card"
            aria-label={feature.title}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Features;
