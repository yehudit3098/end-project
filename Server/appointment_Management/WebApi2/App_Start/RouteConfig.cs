using System.Web.Mvc;
using System.Web.Routing;

namespace WebApi2
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}/{userName}/{password}",
                defaults: new { controller = "Values", action = "Index", id = UrlParameter.Optional, userName = UrlParameter.Optional, password = UrlParameter.Optional }
            );
           
        }
    }
}
