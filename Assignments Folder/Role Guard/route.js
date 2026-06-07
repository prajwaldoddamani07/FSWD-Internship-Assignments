app.get(
 "/admin",
 roleGuard("admin"),
 (req,res)=>{
  res.send("Admin Panel");
 }
);