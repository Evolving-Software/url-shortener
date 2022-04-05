use actix_web::{web, App, HttpServer};

mod controllers;
mod routes;
use controllers::html_response::html_response;
/// Import modules from routes & controllers
use controllers::manual_hello::manual_hello;
use routes::echo::echo;
use routes::hello::hello;

/// # Main web server
/// Serves as the main entry point to the application.
/// Publicly accessible.
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
            .route("/static/{html:.*}", web::get().to(html_response))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
