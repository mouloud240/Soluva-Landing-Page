"use client"

import { useState, useEffect } from "react"

export function Notification({ type = "info", title, message, duration = 5000, onClose, className = "" }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration])

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, 200)
  }

  if (!isVisible) return null

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          icon: "✓",
          borderColor: "rgba(34, 197, 94, 0.3)",
          iconBg: "rgba(34, 197, 94, 0.1)",
          iconColor: "#22c55e",
        }
      case "error":
        return {
          icon: "✕",
          borderColor: "rgba(239, 68, 68, 0.3)",
          iconBg: "rgba(239, 68, 68, 0.1)",
          iconColor: "#ef4444",
        }
      case "warning":
        return {
          icon: "⚠",
          borderColor: "rgba(212, 175, 55, 0.3)",
          iconBg: "rgba(212, 175, 55, 0.1)",
          iconColor: "#d4af37",
        }
      default:
        return {
          icon: "i",
          borderColor: "rgba(59, 130, 246, 0.3)",
          iconBg: "rgba(59, 130, 246, 0.1)",
          iconColor: "#3b82f6",
        }
    }
  }

  const typeStyles = getTypeStyles()

  return (
    <div
      className={`
        card p-4 flex items-start gap-3 max-w-md
        ${isAnimating ? "animate-slide-out" : "animate-slide-in"}
        ${className}
      `}
      style={{
        borderLeft: `3px solid ${typeStyles.iconColor}`,
        background: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium"
        style={{
          backgroundColor: typeStyles.iconBg,
          color: typeStyles.iconColor,
          border: `1px solid ${typeStyles.borderColor}`,
        }}
      >
        {typeStyles.icon}
      </div>

      <div className="flex-1 min-w-0">
        {title && <h4 className="text-sm font-medium text-foreground mb-1">{title}</h4>}
        <p className="text-sm text-muted leading-relaxed">{message}</p>
      </div>

      <button
        onClick={handleClose}
        className="flex-shrink-0 w-5 h-5 rounded-sm flex items-center justify-center text-muted hover:text-foreground hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        aria-label="Close notification"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

// Toast container for managing multiple notifications
export function NotificationContainer({ notifications = [], position = "top-right" }) {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-4 left-4"
      case "bottom-right":
        return "bottom-4 right-4"
      case "bottom-left":
        return "bottom-4 left-4"
      case "top-center":
        return "top-4 left-1/2 transform -translate-x-1/2"
      default:
        return "top-4 right-4"
    }
  }

  return (
    <div className={`fixed z-50 flex flex-col gap-3 ${getPositionClasses()}`}>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  )
}

// Hook for managing notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState([])

  const addNotification = (notification) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = { ...notification, id }

    setNotifications((prev) => [...prev, newNotification])

    return id
  }

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
  }
}
