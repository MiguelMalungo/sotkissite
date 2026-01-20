"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Tabs.css";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
  description?: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  onTabChange,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  onTabChange?: (tab: Tab) => void;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
    if (onTabChange) {
      onTabChange(newTabs[0]);
    }
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={`tabs__container ${containerClassName || ""}`}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={`tabs__tab ${tabClassName || ""} ${
              active.value === tab.value ? "tabs__tab--active" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={`tabs__tab-background ${activeTabClassName || ""}`}
              />
            )}

            <span className="tabs__tab-text">{tab.title}</span>
          </button>
        ))}
      </div>
      <div className="tabs__mobile-navigation tabs__mobile-navigation--top">
        <h3 className="tabs__mobile-title">{active.title}</h3>
        {active.description && (
          <p className="tabs__mobile-description">{active.description}</p>
        )}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={contentClassName}
      />
      <div className="tabs__mobile-navigation tabs__mobile-navigation--bottom">
        <div className="tabs__dots">
          {propTabs.map((tab, idx) => (
            <button
              key={tab.value}
              onClick={() => moveSelectedTabToTop(idx)}
              className={`tabs__dot ${active.value === tab.value ? "tabs__dot--active" : ""}`}
              aria-label={`Go to ${tab.title}`}
            />
          ))}
        </div>
        <div className="tabs__arrows">
          <button
            onClick={() => {
              const currentIndex = propTabs.findIndex(tab => tab.value === active.value);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : propTabs.length - 1;
              moveSelectedTabToTop(prevIndex);
            }}
            className="tabs__arrow-button tabs__arrow-button--left"
            aria-label="Previous tab"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => {
              const currentIndex = propTabs.findIndex(tab => tab.value === active.value);
              const nextIndex = currentIndex < propTabs.length - 1 ? currentIndex + 1 : 0;
              moveSelectedTabToTop(nextIndex);
            }}
            className="tabs__arrow-button tabs__arrow-button--right"
            aria-label="Next tab"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="tabs__content-wrapper">
      {isMobile ? (
        // Mobile: show only active tab with fade
        <motion.div
          key={tabs[0].value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`tabs__content ${className || ""}`}
        >
          {tabs[0].content}
        </motion.div>
      ) : (
        // Desktop: show stacked animation
        tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={`tabs__content ${className || ""}`}
          >
            {tab.content}
          </motion.div>
        ))
      )}
    </div>
  );
};
