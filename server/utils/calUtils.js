module.exports = {
  extract: (str) => {
    const invitee = (/[\\n]Invitee:.(.*)..Invitee\b/gm).exec(str);
    const email = (/.nInvitee Email:.(.*)....Additional\b/gm).exec(str);
    return { invitee, email };
  },
};
