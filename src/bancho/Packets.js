// Overall Packets.
module.exports = {
    0: require("./requests/ActionUpdate"),
    1: require("./requests/SendMessage"),
    2: require("./requests/Logout"),
    3: require("./requests/UserStatusUpdate"),
    25: require("./requests/SendPrivateMessage"),
    79: require("./requests/RecieveUpdates"),
    85: require("./requests/UserStatsRequest")
}