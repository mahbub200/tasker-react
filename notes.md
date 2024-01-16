# component breakdown

first break down into components

# convert template from html to react

# Tasklist

since tasklist is a parent component declare state here
create an object and pass into initail state

```
const defaultTasks = {
    id: crypto.randomUUID(),
    title: "learn react",
    description: "react is used for user interactivity ",
    tags: ["web", "html", "css"],
    priority: "high",
    isFavourite: false,
  };
```

now pass into tasklist component

```
 <TaskList tasks={tasks} />
```

now map it to render as it is an array
