"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useChat } from "ai/react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/chat",
      headers: {
        "Content-Type": "application/json",
      },
      onError: (error) => {
        console.error("Chat error:", error);
      },
      onFinish: (message) => {
        console.log("Chat finished:", message);
      },
    });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const chatVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const minimizeVariants = {
    expanded: {
      height: "24rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    minimized: {
      height: "3rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    idle: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="fixed bottom-5 right-6 z-40 sm:bottom-5 sm:right-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  onClick={toggleChat}
                  size="icon"
                  className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 bg-primary hover:bg-primary/90"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Bot className="h-6 w-6" />
                  </motion.div>
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="left" className="mb-2">
              <p>Chat with Ryan&#39;s Assistant</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-20 right-6 z-50 sm:bottom-24 sm:right-8"
          >
            <motion.div
              variants={minimizeVariants}
              animate={isMinimized ? "minimized" : "expanded"}
              className={cn(
                "w-80 sm:w-96 flex flex-col shadow-2xl max-w-[calc(100vw-3rem)] sm:max-w-none overflow-hidden"
              )}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-center justify-between p-3 border-b bg-muted/50 rounded-t-lg flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        <Bot className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">
                      Ask anything about me
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={minimizeChat}
                      >
                        <Minimize2 className="h-3 w-3" />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={toggleChat}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {!isMinimized && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-1 flex flex-col min-h-0"
                    >
                      <ScrollArea className="flex-1 p-3">
                        <div className="space-y-3">
                          {messages.length === 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.3 }}
                              className="text-center text-muted-foreground text-sm py-8"
                            >
                              <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
                              <p>
                                Send a message to start conversation with me
                              </p>
                              <p className="text-xs mt-1">
                                You can ask anything about work, or anything
                                else you want to know
                              </p>
                            </motion.div>
                          )}

                          {error && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-center text-red-500 text-sm py-4 px-3 bg-red-50 rounded-lg"
                            >
                              <p>
                                Sorry, there was an error processing your
                                request.
                              </p>
                              <p className="text-xs mt-1">Please try again.</p>
                            </motion.div>
                          )}

                          {messages.map((message, index) => (
                            <motion.div
                              key={message.id}
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                delay: index * 0.05,
                              }}
                              className={cn(
                                "flex gap-2 max-w-[85%]",
                                message.role === "user" ? "ml-auto" : "mr-auto"
                              )}
                            >
                              {message.role === "assistant" && (
                                <Avatar className="h-6 w-6 mt-1 flex-shrink-0">
                                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                    <Bot className="h-3 w-3" />
                                  </AvatarFallback>
                                </Avatar>
                              )}

                              <div
                                className={cn(
                                  "rounded-lg px-3 py-2 text-sm break-words whitespace-pre-wrap",
                                  message.role === "user"
                                    ? "bg-primary text-primary-foreground ml-auto"
                                    : "bg-muted"
                                )}
                              >
                                {message.content}
                              </div>

                              {message.role === "user" && (
                                <Avatar className="h-6 w-6 mt-1 flex-shrink-0">
                                  <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                                    U
                                  </AvatarFallback>
                                </Avatar>
                              )}
                            </motion.div>
                          ))}

                          {isLoading && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex gap-2 mr-auto max-w-[85%]"
                            >
                              <Avatar className="h-6 w-6 mt-1 flex-shrink-0">
                                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                  <Bot className="h-3 w-3" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                                <div className="flex gap-1">
                                  <motion.div
                                    className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                    }}
                                  />
                                  <motion.div
                                    className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                      delay: 0.1,
                                    }}
                                  />
                                  <motion.div
                                    className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                      delay: 0.2,
                                    }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                        <div ref={messagesEndRef} />
                      </ScrollArea>

                      {/* Input Area */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="p-3 border-t flex-shrink-0"
                      >
                        <form onSubmit={handleSubmit} className="flex gap-2">
                          <Input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="flex-1 text-sm transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                            disabled={isLoading}
                          />
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              type="submit"
                              size="icon"
                              className="h-9 w-9 flex-shrink-0"
                              disabled={isLoading || !input.trim()}
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        </form>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
