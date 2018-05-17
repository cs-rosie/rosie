const ADMISSIONEMAIL = 'admissions123@codesmith.io';

module.exports = {
  getInviteeData: (str) => {
    const result = {};
    let name = (/[\\n]Invitee:.(.*)..Invitee\b/gm.exec(str));
    const email = /.nInvitee Email:.(.*)....Additional\b/gm.exec(str);
    if (name && email) {
      name = name[1].split(' ');
      result.firstName = name[0];
      result.lastName = name[name.length - 1];
      result.email = email;
    }
    return result;
  },
  getInterviewer: (attendees) => {
    let interviewer;
    attendees.forEach((obj) => {
      if (obj.email !== ADMISSIONEMAIL && obj.email.includes('codesmith.io')) {
        interviewer = obj.email;
      }
    });
    return interviewer;
  },
  getEventType: (summary) => {
    if (summary.includes('Initial Chat')) {
      return 'cultural';
    }
    if (summary.includes('Technical Interview')) {
      return 'techical';
    }
    if (summary.includes('Follow-Up Pair Programming')) {
      return 'follow-up';
    }
    if (summary.includes('Parts')) {
      return 'public';
    }
  },
};
